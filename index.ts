function sum_to_n_a(n: number): number {
    if (n < 1) return 0; // handle non-positive inputs
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum_to_n_b(n: number): number {
    if (n < 1) return 0; // base case: for n < 1, return 0
    return n + sum_to_n_b(n - 1);
}


function sum_to_n_c(n: number): number {
    return n > 0 ? n * (n + 1) / 2 : 0;
}


console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15