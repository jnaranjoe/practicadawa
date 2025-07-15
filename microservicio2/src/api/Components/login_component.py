from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response
from .jwt_component import JwtComponent



class LoginComponent:

    @staticmethod
    def Login(p_user, p_clave):
        try:
            result = False
            data = None
            message = None
            sql = "SELECT count(*) as valor FROM dawa.tb_user WHERE user_login = %s AND user_password = MD5(%s) AND user_state = true"
            record = (p_user, p_clave)

            resul_login = DataBaseHandle.getRecords(sql,1, record)
            if resul_login['result']:
                if resul_login['data']['valor'] > 0:
                    # Retornar Token
                    token = JwtComponent.token_generate(p_user)
                    if token is not None:
                        result = True
                        message = 'Login Exitoso'
                        data = token
                    else:
                        message = "Error al Generar Token"
                else:
                    message = 'Login No Válido'
            else:
                message = resul_login['message']

        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)
