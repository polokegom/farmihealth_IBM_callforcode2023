package org.example;
import java.io.*;
import java.util.Properties;
import org.apache.kafka.clients.producer.*;

public class ProducerApp2 {
     public static void main(String[] args) {
        // Configure the Kafka producer properties
        Properties producerProps = new Properties();
        producerProps.put("bootstrap.servers", "localhost:9092"); // Replace with your Kafka broker(s) addresses
        producerProps.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        producerProps.put("value.serializer", "org.apache.kafka.common.serialization.ByteArraySerializer");

        Producer<String, byte[]> producer = new KafkaProducer<>(producerProps);

  

        File folder = new File("/home/polokego/Desktop/farmihealth_IBM_callforcode2023/analyticserver/AnalyticServer/src/main/resources/farm1.jpeg\"");
        File[] files = folder.listFiles();

        if (files != null) {
            for (File file : files) {
                if (file.isFile()) {
                    try {
                        FileInputStream fileInputStream = new FileInputStream(file);
                        byte[] imageBytes = new byte[(int) file.length()];

                        if (fileInputStream.read(imageBytes) > 0) {
                            // Send the image as a message to the Kafka topic
                            ProducerRecord<String, byte[]> record = new ProducerRecord<>("mapdataset", file.getName(), imageBytes);
                            producer.send(record, (metadata, exception) -> {
                                if (exception == null) {
                                    System.out.println("Image " + file.getName() + " sent successfully. Offset: " + metadata.offset());
                                } else {
                                    System.err.println("Error sending image: " + exception.getMessage());
                                }
                            });
                        }

                        fileInputStream.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }

        // Close the Kafka producer
        producer.close();
    }   
}
