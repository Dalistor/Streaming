from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

from .adicional_defs import verify_credentials

import json

# Create your views here.
def homePage(request):
    return render(request, 'index.html')

@csrf_exempt
def submit_register(request):
    if request.method == 'POST':
        json_data = request.body.decode('utf-8')
        data = json.loads(json_data)

        message = verify_credentials(data)
        if message:
            json_response = {
                'error_message': message
            }

            return JsonResponse(json_response)
        
        else:
            print('Cadastro realizado com sucesso!')

    return HttpResponse(200)