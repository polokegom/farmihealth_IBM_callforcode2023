package org.example;
import java.io.*;
import java.util.Properties;
import org.apache.kafka.clients.producer.*;
import java.time.LocalDateTime;
import java.util.List;
import com.ibm.cloud.objectstorage.ClientConfiguration;
import com.ibm.cloud.objectstorage.auth.AWSCredentials;
import com.ibm.cloud.objectstorage.auth.AWSStaticCredentialsProvider;
import com.ibm.cloud.objectstorage.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.ibm.cloud.objectstorage.services.s3.AmazonS3;
import com.ibm.cloud.objectstorage.services.s3.AmazonS3ClientBuilder;
import com.ibm.cloud.objectstorage.services.s3.model.Bucket;
import com.ibm.cloud.objectstorage.services.s3.model.ListObjectsRequest;
import com.ibm.cloud.objectstorage.services.s3.model.ObjectListing;
import com.ibm.cloud.objectstorage.services.s3.model.S3ObjectSummary;
import com.ibm.cloud.objectstorage.oauth.BasicIBMOAuthCredentials;

import java.io.File;



public class ProducerApp2 {
     public static void main(String[] args) {
        /*
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
        producer.close(); */
            String bucketName = "cropfield-datasets";  // eg my-unique-bucket-name
            String newBucketName = "<NEW_BUCKET_NAME>"; // eg my-other-unique-bucket-name
            String apiKey = "PEYuSE5yyrTptcJyozd0npDqCoOQ1fEKZEXxmieTQgGs"; // eg "W00YiRnLW4k3fTjMB-oiB-2ySfTrFBIQQWanc--P3byk"
            String serviceInstanceId = "crn:v1:bluemix:public:cloud-object-storage:global:a/e518d3d5e8654e068c4cd16497e85429:72985652-758d-49ab-926e-a0943b61a650::"; // eg "crn:v1:bluemix:public:cloud-object-storage:global:a/3bf0d9003abfb5d29761c3e97696b71c:d6f04d83-6c4f-4a62-a165-696756d63903::"
            String endpointUrl = "https://s3.us-south.cloud-object-storage.appdomain.cloud"; // this could be any service endpoint

            String storageClass = "us-south-standard";
            String location = "us"; // not an endpoint, but used in a custom function below to obtain the correct URL

            System.out.println("Current time: " + LocalDateTime.now());
            AmazonS3 cosClient = createClient(apiKey, serviceInstanceId, endpointUrl, location);
            
            listObjects(cosClient, bucketName);
            //createBucket(cosClient, newBucketName, storageClass);
            listBuckets(cosClient);
        }

        public static AmazonS3 createClient(String apiKey, String serviceInstanceId, String endpointUrl, String location)
        {
            AWSCredentials credentials = new BasicIBMOAuthCredentials(apiKey, serviceInstanceId);
            ClientConfiguration clientConfig = new ClientConfiguration()
                    .withRequestTimeout(5000)
                    .withTcpKeepAlive(true);

            return AmazonS3ClientBuilder
                    .standard()
                    .withCredentials(new AWSStaticCredentialsProvider(credentials))
                    .withEndpointConfiguration(new EndpointConfiguration(endpointUrl, location))
                    .withPathStyleAccessEnabled(true)
                    .withClientConfiguration(clientConfig)
                    .build();
        }

        public static void listObjects(AmazonS3 cosClient, String bucketName)
        {
            System.out.println("Listing objects in bucket " + bucketName);
            ObjectListing objectListing = cosClient.listObjects(new ListObjectsRequest().withBucketName(bucketName));
            for (S3ObjectSummary objectSummary : objectListing.getObjectSummaries()) {
                System.out.println(" - " + objectSummary.getKey() + "  " + "(size = " + objectSummary.getSize() + ")");
            }
            System.out.println();
        }

        public static void createBucket(AmazonS3 cosClient, String bucketName, String storageClass)
        {
            cosClient.createBucket(bucketName, storageClass);
        }

        public static void listBuckets(AmazonS3 cosClient)
        {
            System.out.println("Listing buckets");
            final List<Bucket> bucketList = cosClient.listBuckets();
            for (final Bucket bucket : bucketList) {
                System.out.println(bucket.getName());
            }
            System.out.println();
        }
    }