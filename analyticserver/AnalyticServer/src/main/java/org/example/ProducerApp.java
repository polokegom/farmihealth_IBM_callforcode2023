package org.example;

import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.ByteArraySerializer;
import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.videoio.VideoCapture;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Properties;
import javax.imageio.ImageIO;

public class ProducerApp {
    
    private static final String BOOTSTRAP_SERVERS = "localhost:9092";
    private static final String TOPIC = "live_video_topic";

    public static void main(String[] args) {

        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);

        Properties producerProps = new Properties();
        producerProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAP_SERVERS);
        producerProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, ByteArraySerializer.class.getName());
        producerProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, ByteArraySerializer.class.getName());

        org.apache.kafka.clients.producer.Producer<byte[], byte[]> producer = new KafkaProducer<>(producerProps);

        VideoCapture videoCapture = new VideoCapture(0); 

        if (!videoCapture.isOpened()) {
            System.err.println("Unable to access the camera.");
            System.exit(1);
        }

        Mat frame = new Mat();
        BufferedImage bufferedImage;

        while (true) {
            videoCapture.read(frame);

            bufferedImage = matToBufferedImage(frame);

            if (bufferedImage != null) {
                try {
                    byte[] frameData = bufferedImageToByteArray(bufferedImage);
                    ProducerRecord<byte[], byte[]> record = new ProducerRecord<>(TOPIC, frameData);
                    producer.send(record, (metadata, exception) -> {
                        if (exception == null) {
                            System.out.println("Video frame sent successfully. Offset: " + metadata.offset());
                        } else {
                            System.err.println("Error sending video frame: " + exception.getMessage());
                        }
                    });
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    private static BufferedImage matToBufferedImage(Mat mat) {
        if (!mat.empty()) {
            BufferedImage bufferedImage = new BufferedImage(mat.width(), mat.height(), BufferedImage.TYPE_3BYTE_BGR);
            mat.get(0, 0, ((byte[]) bufferedImage.getRaster().getDataElements(0, 0, mat.width(), mat.height(), null)));
            return bufferedImage;
        } else {
            return null;
        }
    }

    private static byte[] bufferedImageToByteArray(BufferedImage bufferedImage) throws IOException {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, "jpg", byteArrayOutputStream);
        return byteArrayOutputStream.toByteArray();
    }
}
