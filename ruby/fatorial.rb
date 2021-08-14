def fatorial(n) 
  return 1 if n <= 1
  return n * fatorial(n - 1)
end

puts fatorial(6)
