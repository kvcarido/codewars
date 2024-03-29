#!/bin/usr/env python

# Challenge: Credit card mask
# Link: https://www.codewars.com/kata/5412509bd436bd33920011bc
# Kyu: 7

def maskify(cc):
  masked = len(cc) - 4
  last4 = cc[-4:]

  if len(cc) < 4 or len(cc) == 4:
    return cc
  else:
    masked_cc = "#" * masked + last4
    return masked_cc