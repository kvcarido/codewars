#!/bin/usr/env python

# Challenge: Remove the minimum
# Link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b
# Kyu: 7

def remove_smallest(numbers):
    if not numbers:
        return []
    copy = numbers.copy()
    # can also use copy = numbers[:]
    copy.remove(min(copy))
    return copy