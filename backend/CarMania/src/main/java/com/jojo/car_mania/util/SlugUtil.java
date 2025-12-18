package com.jojo.car_mania.util;

import java.text.Normalizer;
import java.util.UUID;

public class SlugUtil {
    
    public static String slugify(String model) {
        String id = UUID.randomUUID().toString().substring(0, 5);

        model = Normalizer.normalize(model, Normalizer.Form.NFD)
                .toLowerCase()
                .trim()
                .replaceAll("\\s+", "-") 
                .replaceAll("\\p{M}", "")
                .replaceAll("[^a-z0-9-]", "");  
                
        String slug = id + "-" + model;


        return slug;
    }
}
