class Dicionario
  attr_reader :items

  def initialize
    @items = {}
  end

  def set(key, value)
    @items[key] = value
  end

  def delete(key)
    @items.delete(key)
  end

  def has(key)
    @items.has_key?(key)
  end

  def clear
    @items.clear
  end

  def size
    @items.size
  end

  def keys
    @items.keys
  end

  def values
    @items.values
  end
end


d = Dicionario.new
d.set('a', 1)
d.set('b', 2)
d.set('c', 3)
d.delete('b')
puts d.items