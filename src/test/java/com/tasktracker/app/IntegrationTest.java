package com.tasktracker.app;

import com.tasktracker.app.config.AsyncSyncConfiguration;
import com.tasktracker.app.config.DatabaseTestcontainer;
import com.tasktracker.app.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.context.ImportTestcontainers;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = {
        TaskTrackerApp.class,
        JacksonConfiguration.class,
        AsyncSyncConfiguration.class,
        com.tasktracker.app.config.JacksonHibernateConfiguration.class,
    }
)
@ImportTestcontainers(DatabaseTestcontainer.class)
public @interface IntegrationTest {}
