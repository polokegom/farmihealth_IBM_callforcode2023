package org.example;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringDeserializer;

import java.time.Duration;
import java.util.Arrays;
import java.util.Collections;
import java.util.Properties;

public class ConsumerApp2 {

    
    public static void main(String[] args) {
        
        Properties props = new Properties();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092"); // Replace with your Kafka broker(s) address
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "test-consumer-group"); // Consumer group ID
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,"org.apache.kafka.common.serialization.StringDeserializer");
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");

        // Create a Kafka consumer instance
        try (KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props)){

        // Subscribe to the topic from which you want to read messages
        consumer.subscribe(Arrays.asList("polokegos-events")); // Replace with your topic name

        try {
                // Poll for records
                ConsumerRecords<String, String> records = consumer.poll(Duration.ofSeconds(15));
                        System.out.println("^^^6^^^^^^^^^^^^^^^" + records.count());

                for (ConsumerRecord<String, String> record : records) {
                    System.out.println("-----------------------------" + record.value());

                    System.out.println("Received message:");
                    System.out.println("Key: " + record.key());
                    System.out.println("Value: " + record.value());
                    System.out.println("Partition: " + record.partition());
                    System.out.println("Offset: " + record.offset());
                }
            
        } catch (Exception e) {
               System.out.println("!!!!===================!!!!!!!!!!");
        } finally {
            consumer.close();
        }
    }
}
}