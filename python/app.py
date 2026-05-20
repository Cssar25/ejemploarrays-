from flask import Flask, jsonify, request

app = Flask(__name__)
productos = []

# GET — listar todos
@app.route('/productos', methods=['GET'])
def listar():
    return jsonify(productos), 200

# POST — crear uno nuevo
@app.route('/productos', methods=['POST'])
def crear():
    datos = request.get_json()          # Leer JSON del body
    nuevo = {
        'id': len(productos) + 1,
        'nombre': datos['nombre'],
        'precio': datos['precio']
    }
    productos.append(nuevo)
    return jsonify(nuevo), 201          # 201 = Creado

# DELETE — eliminar por ID
@app.route('/productos/<int:id>', methods=['DELETE'])
def eliminar(id):
    global productos
    productos = [p for p in productos if p['id'] != id]
    return '', 204                       # 204 = Sin contenido
if __name__ == '__main__':
    app.run(debug=True)