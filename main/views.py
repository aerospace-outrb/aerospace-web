from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')


def about(request):
    return render(request, 'main/about.html')


def members(request):
    return render(request, 'main/members.html')


def gallery(request):
    return render(request, 'main/gallery.html')


def contact(request):
    return render(request, 'main/contact.html')
