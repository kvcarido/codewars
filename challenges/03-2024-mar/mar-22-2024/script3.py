#!/bin/usr/env python

# Challenge: Exes and Ohs
# Link: https://www.codewars.com/kata/55908aad6620c066bc00002a
# Kyu: 7

def xo(s):
    lower = s.lower()
    return lower.count('x') == lower.count('o')