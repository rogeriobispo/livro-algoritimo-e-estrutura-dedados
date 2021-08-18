class Node
  attr_accessor :left, :right
  attr_reader :value
  
  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

  def to_s
    "Node: #{value}"
  end
end


class ArvoreBinaria
  def initialize
    @root = nil
  end

  def insert(value)
    node = Node.new(value)
    if @root.nil?
      @root = node
    else
      inserir_node(@root, node)
    end
  end

  def buscar(value)
    buscar_node(@root, value)
  end

  def remover(value)
    remove_node(@root, value)
  end

  def min
    return find_min_node(@root)
  end

  def max
    return find_max_node(@root)
  end

  def order_transversal(block)
    print "Ordem Transversal: "
    transversal_node_order(@root, block)
  end

  def pre_order_transversal(block)
    print "Pre Ordem Transversal: "
    pre_order_transversal_node(@root, block)
  end

  def post_order_transversal(block)
    print "Pos Ordem Transversal: "
    post_order_transversal_node(@root, block)
  end

  private

  def remove_node(current_node, value)
    return false if current_node.nil?

    if value < current_node.value
      current_node.left = remove_node(current_node.left, value)
      return current_node
    elsif value > current_node.value
      current_node.right = remove_node(current_node.right, value)
      return current_node
    else
      if current_node.left.nil? && current_node.right.nil?
        current_node = nil
        return nil
      else 
        if current_node.left.nil?
          current_node = current_node.right
          return current_node
        elsif current_node.right.nil?
          current_node = current_node.left
          return current_node 
        end
      end

      min_node = find_min_node(current_node.right)
      current_node.value = min_node.value
      current_node.right = remove_node(current_node.right, min_node.value)

      return current_node
    end
  end

  def inserir_node(current_node, new_node)
    if new_node.value < current_node.value
      if current_node.left.nil?
        current_node.left = new_node
      else
        inserir_node(current_node.left, new_node)
      end
    else
      if current_node.right.nil?
        current_node.right = new_node
      else
        inserir_node(current_node.right, new_node)
      end
    end
  end

  def buscar_node(current_node, value)
    return false if current_node.nil?

    return current_node if current_node.value == value

    if value < current_node.value
      return buscar_node(current_node.left, value)
    elsif value > current_node.value
      return buscar_node(current_node.right, value)
    else 
      return true
    end
  end

  def find_min_node(current_node)
    while current_node && !current_node.left.nil?
      current_node = current_node.left
    end

    return current_node
  end

  def find_max_node(current_node)
    while current_node && !current_node.right.nil?
      current_node = current_node.right
    end

    return current_node
  end

  def transversal_node_order(node, block)
    if node
      transversal_node_order(node.left, block)
      block.call(node)
      transversal_node_order(node.right, block)
    end
  end

  def pre_order_transversal_node(node, block)
    if node
      block.call(node)
      transversal_node_order(node.left, block)
      transversal_node_order(node.right, block)
    end
  end

  def post_order_transversal_node(node, block)
    if node
      transversal_node_order(node.left, block)
      transversal_node_order(node.right, block)
      block.call(node)
    end
  end
end


arvore = ArvoreBinaria.new
arvore.insert(10)
arvore.insert(5)
arvore.insert(15)
arvore.insert(2)
# puts arvore.buscar(15)
# arvore.remover(2)
# puts arvore.min
# puts arvore.max
block = lambda { |node| print "#{node.value} " }
arvore.order_transversal(block)
arvore.pre_order_transversal(block)
arvore.post_order_transversal(block)
