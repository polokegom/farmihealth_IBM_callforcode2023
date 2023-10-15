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
import com.ibm.cloud.objectstorage.client.builder.AwsClientBuilder.EndpointConfiguration;
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

public class IbmCos {

    private String apiKey = "fTC7hYTL76WqaCEs11cHJx1wK7ZxvE_qB1jrIlKTmdJ0";
    private String serviceInstanceId = "crn:v1:bluemix:public:cloud-object-storage:global:a/e518d3d5e8654e068c4cd16497e85429:72985652-758d-49ab-926e-a0943b61a650::";
    private String endpointUrl = "https://s3.us-south.cloud-object-storage.appdomain.cloud";
    private String location = "us";

    public IbmCos() {
        //AmazonS3 cosClient = createClient(apiKey, serviceInstanceId, endpointUrl);

    }


    public static AmazonS3 createClient(String apiKey, String serviceInstanceId, String endpointUrl)
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



    public static void createBucket(AmazonS3 cosClient, String bucketName)
    {
        System.out.printf("Creating new bucket: %s\n", bucketName);
        cosClient.createBucket(bucketName);
        System.out.printf("Creating new bucket: %s\n", bucketName);
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



    public static void postFrameToBucket(AmazonS3 cos,String bucketName, String frameName, String framePath) {
       
        System.out.printf("Sending new frame: %s\n", framePath); 
        cos.putObject(bucketName, frameName, new File(framePath) );
        System.out.printf("Frame: %s Sent!\n", framePath);
    }


    /* 
    public static void fastPostFrameToBucket(AmazonS3 cos,String apikey,String bucketName, String frameName, String framePath) {
       


        // Load file
        File inputFile = new File(framePath);

        // Create AsperaTransferManager for FASP upload
        AsperaTransferManager asperaTransferMgr = new AsperaTransferManagerBuilder(apikey, cos).build();

        // Upload test file and report progress
        Future<AsperaTransaction> asperaTransactionFuture = asperaTransferMgr.upload(bucketName, inputFile,frameName);
        try {
            AsperaTransaction asperaTransaction = asperaTransactionFuture.get();
        } catch(InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }

*/


    public static void getFrameFromBucket(AmazonS3 cos,String bucketName, String frameName, String framePath) {
        
        System.out.printf("Retrieving new Frame: %s\n", framePath);
        GetObjectRequest request = new GetObjectRequest(bucketName,frameName);
        cos.getObject( request,new File(frameName));
        System.out.printf("Item: %s created!\n", framePath);
    }



    public static void deleteItem(AmazonS3 cos,String bucketName, String frameName) {
        System.out.printf("Deleting item: %s\n", frameName);
        cos.deleteObject(bucketName, frameName);
        System.out.printf("Item: %s deleted!\n", frameName);
    }

    
}
