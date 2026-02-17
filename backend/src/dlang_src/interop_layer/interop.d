module interop_layer.interop;

extern (C) {
    double calculate_tax(double amount, double rate);
    int sum_values(const int* data, size_t size);
}
