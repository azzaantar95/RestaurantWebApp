package com.spring.restaurant.config;

import com.spring.restaurant.model.Category;
import com.spring.restaurant.model.Order;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
@Configuration
public class DataRestApiConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] preventMethods = {HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.GET, HttpMethod.POST};
        disableHttpMethods(Order.class, config, preventMethods);
        disableHttpMethods(Category.class, config, preventMethods);

        //   HttpMethod[] preventMethods={HttpMethod.PUT,HttpMethod.DELETE,HttpMethod.GET,HttpMethod.POST};

    }

    private void disableHttpMethods(Class className, RepositoryRestConfiguration config, HttpMethod[] preventMethods) {
        config.getExposureConfiguration()
                .forDomainType(className)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethods)))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(preventMethods));
    }
}
