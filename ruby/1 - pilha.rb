class Pilha
  attr_accessor :pilha

  def initialize
    @pilha = []
  end

  def empilhar(value)
    pilha.push(value)
  end

  def desempilhar
    pilha.pop
  end

  def imprimir
    puts pilha
  end

  def topo
    pilha[pilha.length - 1] 
  end

  def tamanho
    pilha.length
  end

  def vazia?
    tamanho == 0
  end

  def limpar
    pilha.clear
  end
end


class Base
  BINARIO = 2
  OCTAL = 8
  HEXADECIMAL = 16

  def self.binario
    BINARIO
  end

  def self.octal
    OCTAL
  end

  def self.hexadecimal
    HEXADECIMAL
  end
end

def base_converte(base, pilha, numero)
  if numero > 0
    pilha.empilhar(numero % base)
    base_converte(base, pilha, numero / base) 
  end

  pilha
end

digit_strings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


p = base_converte(Base.hexadecimal, Pilha.new, 300) 

while(!p.vazia?)
  puts digit_strings[p.desempilhar]
end


# p = Pilha.new
# puts "vazia? #{p.vazia?}"
# p.empilhar(1)
# p.empilhar(2)
# p.empilhar(3)
# p.empilhar(4)
# p.empilhar(5)
# puts "removido #{p.desempilhar}"
# puts "topo #{p.topo}"
# puts "tamanho #{p.tamanho}"
# puts "vazia? #{p.vazia?}"
# p.limpar
# puts "chamado metodo limpar"
# puts "vazia? #{p.vazia?}"
# p.imprimir