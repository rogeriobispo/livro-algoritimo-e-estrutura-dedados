
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

  def remove(key)
    index = index_of(key)
    if index >= 0
      remove_at(index)
      true
    else
      false
    end 
  end
  
  def index_of(key)
    current = @head
    index = 0
    while current != nil
      if current.value.key == key
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


class ValuePair
  attr_reader :key, :value

  def initialize(key, value)
    @key = key
    @value = value
  end

  def to_s
    "[#{@key} - #{@value}]"
  end
end

class HashTable
  attr_reader :table

  def initialize
    @table = []
    @key = nil
    @value = nil
  end

  def put(key, value)
    position = lose_lose_hash_code(key)
    if @table[position].nil?
      table[position] = ::ListaLigada.new
    end

    @table[position].append(ValuePair.new(key, value))
  end

  def remove(key)
    position = lose_lose_hash_code(key)
    unless @table[position].nil?
      current = @table[position].head
      while !current.next.nil?
        if current.value.key == key
          @table[position].remove(key)
          if table[position].empty?
            @table[position] = nil
          end
          return true
        end
        current = current.next
      end
      
      if current.value.key == key
        @table[position].remove(key)
        if @table[position].empty?
          @table[position] = nil
        end
        return true
      end
    end
    return false
  end

  def get(key)
    position = lose_lose_hash_code(key)
    unless @table[position].nil? 
      current = @table[position].head

      while current.next
        if current.value.key == key
          return current.value.value
        end

        current = current.next
      end

      if current.value.key == key
        return "[#{current.value.key}, #{current.value.value}]"
      end
    end

    return nil
  end

  def print
    @table.each do |element|
      unless element.nil?
        element.print
      end
    end
  end

  private

  def lose_lose_hash_code(key)
    hash = 0
    key.each_byte do |byte|
      hash = (hash << 5) + hash + byte
      hash = hash & hash
    end
    hash % 37
  end
end

table = HashTable.new

table.put("Gandalf", 1)
table.put("John", 2)
table.put("Tyrion", 3)
table.put("Aaron", 4)
table.put("Donnie", 5)
table.put("Ana", 6)
table.put("Jonathan", 7)
table.put("Jamie", 8)
table.put("Sue", 9)
table.put("Mindy", 10)
table.put("Paul", 11)
table.put("Nathan", 12)
table.put("Ralph", 13)
table.remove("Donnie")
table.remove("Mindy")
table.remove("Sue")
puts table.get("Gandalf")
table.print()




