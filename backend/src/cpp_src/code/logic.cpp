#include <iostream>
#include <vector>
#include <span>
#include <concepts>
#include <numeric>

// C++20 Concept to ensure T is arithmetic (int, float, etc.)
template <typename T>
concept Numeric = std::is_arithmetic_v<T>;

extern "C" {
    // Basic calculation exposed to D
    double calculate_tax(double amount, double rate) {
        return amount * rate;
    }

    // Advanced: Process a range using C++20 span
    // Note: Interop with complex types requires careful struct alignment
    int sum_values(const int* data, size_t size) {
        std::span<const int> values(data, size);
        return std::accumulate(values.begin(), values.end(), 0);
    }
}
