from django.db import models

# Create your models here.

# for projects stats
class projectstats(models.Model):
    CONTRIBUTION_TYPE=[
        ('OP','Open Source'),
        ('PP','Personal Project'),
    ]
    project_image = models.ImageField(upload_to='project_image/')
    project_title = models.CharField(max_length=100)
    contribution = models.CharField(max_length=2,choices=CONTRIBUTION_TYPE, default='PP')
    project_description = models.TextField(max_length=800)
    source_code = models.URLField(max_length=500)
    deployed_link = models.URLField(max_length=500, null=True, blank=True)
    tech_stack = models.TextField(max_length=500, default='python')

    def __str__(self):
        return self.project_title
    
    class Meta:
        app_label = 'myapp'
    

# for github stats
class github_stats(models.Model):
    github_streak = models.URLField(max_length=500)
    github_contribution = models.URLField(max_length=500)
    github_language_used = models.URLField(max_length=500)

# for leetcode stats
class leetcode_stats(models.Model):
    leetcode_profile = models.URLField(max_length=500)

# for Soft skills
class soft_skills(models.Model):
    skill_image = models.ImageField(upload_to='skill_image/')
    skill_name = models.CharField(max_length=100)

    def __str__(self):
        return self.skill_name

    class Meta:
        app_label = 'myapp'
