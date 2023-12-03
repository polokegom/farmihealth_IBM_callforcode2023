package com.polokego.proxy_kafka_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@SpringBootApplication
public class ProxyKafkaServerApplication {

	@Service
	public class KafkaConsumer {
		@KafkaListener(topics = "polokegos-events", groupId = "group_id2")
		public void consume(String message) {
			System.out.println("Received message: " + message);
		}
	}
	public static void main(String[] args) {
		SpringApplication.run(ProxyKafkaServerApplication.class, args);
	}

}
