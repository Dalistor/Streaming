from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def homePage(requests):
    return render(requests, 'index.html')

@csrf_exempt
def submit_register(requests):
    print('Post')

    return HttpResponse(200)