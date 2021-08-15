class Node
  attr_reader :value
  attr_accessor :next
  
  def initialize(value)
    @value = value
    @next = nil
  end
end

class ListaLigada
  attr_reader :head
  attr_reader :size

  def initialize
    @head = nil
    @size = 0
  end

  def append(value)
    node = Node.new(value)
    current = @head
    
    if current.nil?
      @head = node
    else
      while current.next != nil
        current = current.next
      end
      current.next = node
    end
   
    @size += 1 
  end

  def insert(position, value)
    if position >= 0 && position <= @size
      node = Node.new(value)
      current = @head
      previous = nil
      index = 0
      if position == 0
        node.next = current
        @head = node
      else
        while index < position
          previous = current
          current = current.next
          index += 1
        end
        node.next = current
        previous.next = node
      end
      
      @size += 1
      true
    else
      false
    end
  end

  def remove_at(position)
    if position >= 0 && position < @size
      current = @head
      previous = nil
      index = 0
      if position == 0
        @head = current.next
      else
        while index < position
          previous = current
          current = current.next
          index += 1
        end

        previous.next = current.next
      end
    end 
  end

  def remove(value)
    index = index_of(value)
    if index >= 0
      remove_at(index)
      true
    else
      false
    end 
  end
  
  def index_of(value)
    current = @head
    index = 0
    while current != nil
      if current.value == value
        return index
      end
      current = current.next
      index += 1
    end
    -1
  end

  def empty?
    @size.zero?
  end

  def print
    current = @head
    index = 0
    printHelper(current, index)
  end

  private

  def printHelper(current, index)
    return if current.nil?
    puts "Valor: #{current.value} - Indice: #{index}"
    printHelper(current.next, index + 1)
  end
end

lista = ListaLigada.new()


lista.append(1)
lista.append(2)
lista.append(3)
lista.append(4)
lista.append(5)
lista.insert(2, 6)
puts "indice de 6 é #{lista.index_of(6)}"
puts "o tomanho da lista é #{lista.size}"
lista.remove(6)
lista.remove_at(0)
lista.print()