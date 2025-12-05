package com.jojo.car_mania.entity.enums;

public enum Location {
    OSTRAVA("Ostrava"),
    ŽILINA("Žilina");

    private final String label;

    Location(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
