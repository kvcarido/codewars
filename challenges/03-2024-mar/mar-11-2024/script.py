#!/usr/bin/env python

# Challenge: List filtering
# Link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
# Kyu: 7

def filter_list(lst):
    return [x for x in lst if not isinstance(x, str)]