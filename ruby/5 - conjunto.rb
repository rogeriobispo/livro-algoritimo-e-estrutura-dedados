class Set
  attr_reader :items

  def initialize
    @items = {} 
  end

  def add(item)
    @items[item] = item
  end

  def delete(item)
    @items.select! { |i| i != item }
  end

  def has?(item)
    @items.has_key?(item)
  end

  def clear
    @items = {}
  end

  def size
    @items.size
  end

  def values
    @items.values
  end

  def union(otherSet)
    return {} if otherSet.nil? || otherSet.instance_of?(Set) == false
    @items.merge!(otherSet.items)
  end

  def intersection(otherSet)
    return {} if otherSet.nil? || otherSet.instance_of?(Set) == false
    @items.select { |i| otherSet.has?(i) }
  end

  def difference(otherSet)
    return {} if otherSet.nil? || otherSet.instance_of?(Set) == false
    @items.select { |i| !otherSet.has?(i) }
  end

  def sub_set(otherSet)
    return false if size() > otherSet.size()

    
    items.values.each do |item|
      return false if !otherSet.has?(item)
    end

    true
  end
end

set = Set.new

set.add(1)
set.add(2)
set.add(3)
# set.delete(2)
otherSet = Set.new
otherSet.add(1)
otherSet.add(2)
otherSet.add(3)
otherSet.add(4)
otherSet.add(5)
otherSet.add(6)
# otherSet.add(4)
# otherSet.add(5)
# otherSet.add(6)
# set.union(otherSet)
# puts set.intersection(otherSet)
# puts set.difference(otherSet)
puts set.sub_set(otherSet)
# puts set.has?(3)
# puts set.items