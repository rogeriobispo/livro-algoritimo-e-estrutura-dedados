class Fila
  attr_reader :fila

  def initialize()
    @fila = []
  end

  def adicionar(value)
    fila.push(value)
  end

  def remover
    fila.shift
  end

  def proximo
    fila.first
  end

  def vazia
    fila.empty?
  end

  def limpar
    file.clear
  end

  def tamanho
    fila.size
  end

  def imprimir
    puts "Fila: #{fila}"
  end
end



fila = Fila.new

fila.adicionar(1)
fila.adicionar(2)
fila.adicionar(3)
fila.adicionar(4)
fila.adicionar(5)
fila.adicionar(6)

puts fila.proximo
puts fila.remover
puts fila.proximo
