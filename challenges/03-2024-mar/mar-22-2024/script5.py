#!/bin/usr/env python

# Challenge: Find the middle element
# Link: https://www.codewars.com/kata/545a4c5a61aa4c6916000755
# Kyu: 7

def gimme(input_array):
    return input_array.index(sorted(input_array)[1])