#!/bin/usr/env python

# Challenge: Factorial
# Link: https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
# Kyu: 7

def factorial(n):
    if n < 0 or n > 12:
        raise ValueError()
    return 1 if n == 0 else n * factorial(n - 1)