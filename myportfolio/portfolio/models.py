

# Create your models here.
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.title

class Education(models.Model):
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.degree
