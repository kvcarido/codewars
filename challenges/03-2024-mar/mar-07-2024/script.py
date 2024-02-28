#!/usr/bin/env python

# Challenge: Invert values
# Kyu: 8

def invert(lst):
    inverse = []
    for i in lst:
        inverse.append(-i)
    return inverse