import json

def jsonToObject(request):
    json_data = request.body.decode('utf-8')
    data = json.loads(json_data)

    return data

def verify_register_credentials(data):
    error_message = None

    words_number = len(data.get('username').split())
    if words_number <= 1:
        error_message = 'Nome incompleto'
    elif data.get('password', None) != data.get('confirmpassword', None):
        error_message = 'Senhas não conferem'
    elif len(data.get('password', None)) < 5:
        error_message = 'Senha muito curta'

    return error_message

def verify_login_credentials(data):
    error_message = None

    words_number = len(data.get('username').split())
    if words_number <= 1:
        error_message = 'Nome incompleto'
    elif data.get('password', None) != data.get('confirmpassword', None):
        error_message = 'Senhas não conferem'
    elif len(data.get('password', None)) < 5:
        error_message = 'Senha muito curta'

    return error_message