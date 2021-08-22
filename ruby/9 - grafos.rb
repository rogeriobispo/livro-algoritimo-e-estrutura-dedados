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

class Grafos
  def initialize
    @vertices = []
    @arestas = Dicionario.new  
  end

  def adicionar_vertice(vertice)
    @vertices.push(vertice)
    @arestas.set(vertice, [])
  end

  def adicionar_aresta(vertice, edge)
    @arestas.get(vertice).push(edge)
    @arestas.get(edge).push(vertice)
  end

  def to_s
    str = ""
    for(i =0; i < @vertices.size; i += 1)
      str += @vertices[i].to_s + ": ->"
      visinhos = @arestas.get(@vertices[i])
      for(j=0; j < visinhos.size; i += 1)
        str += visinhos[j].to_s + " "
      end 
      str += "\n"
    end
    str
  end

  def inicializar_cor
    cor = []
    for(i = 0; i < @vertices.size; i += 1)
      cor[@vertices[i]] = "white"]
    end
  
    cor
  end

  def busca_em_profundidadeDFS(block)
    colors = inicializar_cor
    @vertices.each_with_index do |vertice, index|
      if(colors[vertice[index]] == "white")
        dfs_visit(vertice, colors, block)
      end
    end
  end

  def bfs_busca_em_largura(vertice, block)
    colors = initializar_cor
    fila = Fila.new
    fila.adicionar(vertice)

    while(!fila.vazia)
      u = queue.remover
      neighors = @arestas.get(u)
      color[u] = "gray"
      neighors.each_with_index do |value, index|
        if(colors[value] == "white")
          colors[value] = "gray"
          fila.adicionar(value)
        end 
      end
      color[u] = "black"
      block(u)
    end
  end

  private

  def dfs_visit(vertice, colors, block)
    colors[vertice] = "gray"
    block.call(vertice)
    visinhos = @arestas.get(vertice)
    visinhos.each_with_index do |visinho, index|
      w = neighors[index]
      if colors[w] == "white"
        color[w] = "gray"
        dfs_visit(w, colors, block)
      end
    end
  
    colors[vertice] = "black"
  end
end

def visitedVertices(vertice)
  print vertice
end