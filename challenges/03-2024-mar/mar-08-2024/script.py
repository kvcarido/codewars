#!/usr/bin/env python

# Challenge: Count of positives / sum of negatives
# Link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/
# Kyu: 8

def count_positives_sum_negatives(arr):
    count = 0
    sum = 0
    if not arr: return []

    for i in arr:
        if i > 0:
            count += 1
        else:
            sum += i   
    return [count, sum]