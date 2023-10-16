package org.example;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Properties;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import org.apache.kafka.clients.producer.*;
import java.time.LocalDateTime;
import java.util.List;
import com.ibm.cloud.objectstorage.ClientConfiguration;
import com.ibm.cloud.objectstorage.auth.AWSCredentials;
import com.ibm.cloud.objectstorage.auth.AWSStaticCredentialsProvider;
import com.ibm.cloud.objectstorage.client.builder.AwsClientBuilder.EndpointConfiguration;/*
import com.ibm.cloud.objectstorage.services.aspera.transfer.AsperaConfig;
import com.ibm.cloud.objectstorage.services.aspera.transfer.AsperaTransaction;
import com.ibm.cloud.objectstorage.services.aspera.transfer.AsperaTransferManager;
import com.ibm.cloud.objectstorage.services.aspera.transfer.AsperaTransferManagerBuilder;
import com.ibm.cloud.objectstorage.services.aspera.transfer.AsperaTransferManagerConfig;*/
import com.ibm.cloud.objectstorage.services.s3.AmazonS3;
import com.ibm.cloud.objectstorage.services.s3.AmazonS3ClientBuilder;
import com.ibm.cloud.objectstorage.services.s3.model.Bucket;
import com.ibm.cloud.objectstorage.services.s3.model.GetObjectRequest;
import com.ibm.cloud.objectstorage.services.s3.model.ListObjectsRequest;
import com.ibm.cloud.objectstorage.services.s3.model.ObjectListing;
import com.ibm.cloud.objectstorage.services.s3.model.ObjectMetadata;
import com.ibm.cloud.objectstorage.services.s3.model.PutObjectRequest;
import com.ibm.cloud.objectstorage.services.s3.model.S3ObjectSummary;
import com.ibm.cloud.objectstorage.oauth.BasicIBMOAuthCredentials;
import com.ibm.cloud.objectstorage.oauth.DefaultTokenManager;
import com.ibm.cloud.objectstorage.oauth.DelegateTokenProvider;
import com.ibm.cloud.objectstorage.oauth.TokenManager;



public class ProducerApp2 {
     public static void main(String[] args) {


                Properties props = new Properties();
                props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092"); 
                props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
                props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
        
                KafkaProducer<String, String> producer = new KafkaProducer<>(props);
        
                String topic = "polokegos-events"; 
        
                try {

                    ProducerRecord<String, String> record = new ProducerRecord<>(topic,"{'lat':89.332,'lan':-300.266,'frameurl': 'https://th.bing.com/th/id/OIP.DuVbrwWSsTMRX3RK4DEPpwHaHa?pid=ImgDet&w=474&h=474&rs=1'}");
                    producer.send(record);
                    record = new ProducerRecord<>(topic,"{'lat':87.352,'lan':-82.266,'frameurl': 'https://th.bing.com/th/id/OIP.aoYL-f_t7yRdCsJrePSgPAHaEK?pid=ImgDet&rs=1'}");

                    producer.send(record);
                    System.out.println("1st push");
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    producer.close();
                }
        /*
        // Configure the Kafka producer properties
        Properties producerProps = new Properties();
        producerProps.put("bootstrap.servers", "localhost:9092"); // Replace with your Kafka broker(s) addresses
        producerProps.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        producerProps.put("value.serializer", "org.apache.kafka.common.serialization.ByteArraySerializer");

        Producer<String, byte[]> producer = new KafkaProducer<>(producerProps);

  
        // Close the Kafka producer
        producer.close(); 
            String bucketName = "cropfield-datasets";  // eg my-unique-bucket-name
            String newBucketName = "polokge.hackathon.gmail.com-cropfield-datasets"; // eg my-other-unique-bucket-name
            String apiKey = "fTC7hYTL76WqaCEs11cHJx1wK7ZxvE_qB1jrIlKTmdJ0"; // eg "W00YiRnLW4k3fTjMB-oiB-2ySfTrFBIQQWanc--P3byk"
            String serviceInstanceId = "crn:v1:bluemix:public:cloud-object-storage:global:a/e518d3d5e8654e068c4cd16497e85429:72985652-758d-49ab-926e-a0943b61a650::"; // eg "crn:v1:bluemix:public:cloud-object-storage:global:a/3bf0d9003abfb5d29761c3e97696b71c:d6f04d83-6c4f-4a62-a165-696756d63903::"
            String endpointUrl = "https://s3.us-south.cloud-object-storage.appdomain.cloud"; // this could be any service endpoint

            String storageClass = "us-south-standard";
            String location = "us"; // not an endpoint, but used in a custom function below to obtain the correct URL

            System.out.println("Current time: " + LocalDateTime.now());
            AmazonS3 cosClient = createClient(apiKey, serviceInstanceId, endpointUrl, location);
*/

            //listObjects(cosClient, bucketName);
            //createBucket(cosClient, newBucketName);
            //listBuckets(cosClient);

        }

  

}

