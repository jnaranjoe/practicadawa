from datetime import datetime, timedelta

import jwt
import pytz

from ...utils.general.config import Parametros
from ...utils.general.logs import HandleLogs


class JwtComponent:

    @staticmethod
    def token_generate(p_user):
        #Metodo Crear o generar un token
        try:
            respuesta = None
            timezone = pytz.timezone('America/Guayaquil')
            payload = {
                'iat': datetime.now(tz=timezone),
                'exp': datetime.now(tz=timezone) + timedelta(minutes=15),
                'username': p_user
            }
            respuesta = jwt.encode(payload, Parametros.secret_jwt, 'HS256')
            HandleLogs.write_log("Token Generado -> " + respuesta)

        except Exception as err:
            HandleLogs.write_error("Ocurrio un error al generar token -> " + str(err))
        finally:
            return respuesta


    @staticmethod
    def token_validate(p_token):
        #Metodo para Validar un Token JWT
        try:
            respuesta = False
            resp_jwt = jwt.decode(p_token, Parametros.secret_jwt, algorithms=['HS256'])
            print(resp_jwt)
            if resp_jwt is not None:
                respuesta = True

        except Exception as err:
            HandleLogs.write_error("Ocurrio un error al Validar token -> " + str(err))
        finally:
            return respuesta

