class Element
  attr_reader :value, :prioridade

  def initialize(value, prioridade)
    @value = value
    @prioridade = prioridade
  end

  def to_s
    "Valor: #{value} - Prioridade: #{prioridade}"
  end
end

class FilaPrioridade

  def initialize()
    @fila = []
  end

  def adicionar(value, prioridade)
    elm = Element.new(value, prioridade)
    added = false

    @fila.each_with_index do |element, index|
      if elm.prioridade < element.prioridade
        @fila.insert(index, elm)
        added = true
        break
      end
    end

    @fila.push(elm) unless added
  end

  def remover
    @fila.shift
  end

  def proximo
    @fila.first.value
  end

  def vazia?
    @fila.empty?
  end

  def limpar
    @file.clear
  end

  def tamanho
    @fila.size
  end

  def imprimir
    @fila.each do |element|
      puts element.to_s
    end
  end
end

fila = FilaPrioridade.new

fila.adicionar(1, 0)
fila.adicionar(2, 0)
fila.adicionar(100, 5)
fila.adicionar(101, 6)
fila.adicionar(99, 4)
fila.adicionar(10, 1)
puts fila.proximo
puts fila.tamanho
fila.imprimir
