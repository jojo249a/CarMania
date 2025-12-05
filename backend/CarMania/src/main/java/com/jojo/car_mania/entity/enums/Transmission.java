package com.jojo.car_mania.entity.enums;

public enum Transmission {
    MANUAL("Manual"), 
    AUTOMATIC("Automatic");

    private final String label;

    Transmission(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

}
