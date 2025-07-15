from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class UserComponent:

    @staticmethod
    def getAllUsers():
        try:
            result = False
            data = None
            message = None
            sql = """
                SELECT user_id, user_login, user_name, user_password
                FROM dawa.tb_user
                WHERE user_state = TRUE;
            """

            result_user = DataBaseHandle.getRecords(sql,0)
            if result_user['result']:
                result = True
                data = result_user['data']
            else:
                message = 'Error al Obtener datos de usuarios -> ' + result_user['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)
