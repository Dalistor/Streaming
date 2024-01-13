from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

from .adicional_defs import verify_register_credentials, verify_login_credentials, jsonToObject

import json

# Create your views here.
def homePage(request):
    return render(request, 'index.html')

@csrf_exempt
def submit_register(request):
    if request.method == 'POST':
        data = jsonToObject(request)

        message = verify_register_credentials(data)
        if message:
            json_response = {
                'error_message': message
            }

            return JsonResponse(json_response)
        
        else:
            print('Cadastro realizado com sucesso!')

    return HttpResponse(200)

@csrf_exempt
def submit_login(request):
    if request.method == 'POST':
        data = jsonToObject(request)

        message = verify_login_credentials(data)
        if message:
            json_response = {
                'error_message': message
            }

            return JsonResponse(json_response)

        else:
            print('Login feito com sucesso!')

        return HttpResponse(200)