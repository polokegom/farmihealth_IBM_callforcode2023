package org.example;
import com.ibm.cloud.cloudant.v1.Cloudant;
import com.ibm.cloud.sdk.core.security.IamAuthenticator;
import com.ibm.cloud.cloudant.v1.model.Document;
import com.ibm.cloud.cloudant.v1.model.DocumentResult;
import com.ibm.cloud.cloudant.v1.model.GetDocumentOptions;
import com.ibm.cloud.cloudant.v1.model.PostDocumentOptions;

public class IbmCloudant {


    private IamAuthenticator authenticator;
    private Cloudant serviceCloudant;
    public IbmCloudant(){

        authenticator = new IamAuthenticator.Builder()
        .apikey("{}")
        .build();

        serviceCloudant = new Cloudant(Cloudant.DEFAULT_SERVICE_NAME, authenticator);

        serviceCloudant.setServiceUrl("{}");
    }


    public String getDocument(String ID) {


        GetDocumentOptions docQuery = new GetDocumentOptions.Builder()
            .db("farmihealth")
            .docId(ID)
            .build();

        Document res = serviceCloudant.getDocument(docQuery).execute()
            .getResult();
            return String.valueOf(res);

    }


    public void setNewDocument(Document newData) {


        PostDocumentOptions documentOptions = new PostDocumentOptions.Builder()
                .db("products")
                .document(newData)
                .build();

        DocumentResult response = serviceCloudant.postDocument(documentOptions).execute()
                .getResult();
        System.out.println(response);

    }
}