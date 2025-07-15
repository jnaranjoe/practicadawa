from flask_restful import Resource

from ..Components.user_component import UserComponent
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success, response_not_found, response_unauthorize
from ..Components.jwt_component import JwtComponent
from flask import request
class UserService(Resource):
    @staticmethod
    def get():
        try:
            HandleLogs.write_log("Ejecutando servicio de Listar Usuario")
            # Validar que el token sea correcto
            auth_header = request.headers.get('Authorization')
            if not auth_header:
                return response_unauthorize()

            parts = auth_header.split()
            if parts[0].lower() != 'bearer' or len(parts) == 1 or len(parts) > 2:
                return response_unauthorize()

            token = parts[1]

            if not JwtComponent.token_validate(token):
                return response_unauthorize()

            resultado = UserComponent.getAllUsers()
            if resultado['result']:
                if resultado['data'].__len__() > 0:
                    return response_success(resultado['data'])
                else:
                    return response_not_found()
            else:
                return response_error(resultado['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())
