from django.shortcuts import render
from .models import Project, Skill, Experience, Education

def index(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    experiences = Experience.objects.all()
    education = Education.objects.all()
    return render(request, 'portfolio/index.html', {
        'projects': projects,
        'skills': skills,
        'experiences': experiences,
        'education': education
    })
