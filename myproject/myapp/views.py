from django.shortcuts import render
from . import links
from .models import github_stats, leetcode_stats, soft_skills, projectstats

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def projects(request):
    projects = projectstats.objects.all()
    return render(request, 'project.html', {'projects': projects})

def skills(request):
    skills = soft_skills.objects.all()
    github = github_stats.objects.all()
    leetcode = leetcode_stats.objects.all()
    return render(request, 'skills.html', {'languages': links.languages, 'frameworks': links.frameworks, 'databases': links.databases, 'hosting': links.hosting, 'design': links.designs, 'others': links.others, 'github': github, 'leetcode': leetcode, 'skills': skills})

