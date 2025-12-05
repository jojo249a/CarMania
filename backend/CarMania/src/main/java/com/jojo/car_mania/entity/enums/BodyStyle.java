package com.jojo.car_mania.entity.enums;

public enum BodyStyle {
    SUV("SUV / Off-road"),
    SEDAN("Sedan"),
    HATCHBACK("Hatchback"),
    CABRIOLET("Cabriolet"),
    COUPE("Coupe"),
    WAGON("Wagon");

    private final String label;

    BodyStyle(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
