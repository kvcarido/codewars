#!/bin/usr/env python

# Challenge: Find the middle element
# Link: https://www.codewars.com/kata/545a4c5a61aa4c6916000755
# Kyu: 7

def middle_element(list):
    ordered = sorted(list)
    return ordered[len(ordered) // 2]