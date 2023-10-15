package org.example;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringDeserializer;

import java.time.Duration;
import java.util.Collections;
import java.util.Properties;

public class ConsumerApp2 {

    
    public static void main(String[] args) {
        
        Properties props = new Properties();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092"); // Replace with your Kafka broker(s) address
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "polokegos-consumer-group"); // Consumer group ID
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());

        // Create a Kafka consumer instance
        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);

        // Subscribe to the topic from which you want to read messages
        consumer.subscribe(Collections.singletonList("polokegos-events")); // Replace with your topic name

        try {
                // Poll for records
                ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));

                // Process the records
                records.forEach(record -> {
                    System.out.printf(" message: key=%s, value=%s, offset=%d%n",
                            record.key(), record.value(), record.offset());
                });
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            consumer.close();
        }
    }
}