class ArrayList

  def initialize
    @array = []
  end

  def add(item)
    @array.push(item)
  end

  def to_s
    @array.join(', ')
  end

  def buble_sort
    @array.each_with_index do |_, i|
      @array.each_with_index do |__, j|
        if j < (@array.size - 1) && @array[j] > @array[j + 1]
          temp = @array[j]
          @array[j] = @array[j + 1]
          @array[j + 1] = temp
        end
      end
    end
  end  
end

array_list = ArrayList.new
array_list.add(5)
array_list.add(4)
array_list.add(3)
array_list.add(2)
array_list.add(1)
array_list.buble_sort
puts array_list.to_s

