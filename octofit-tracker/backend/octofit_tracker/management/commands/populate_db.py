from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import date

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='marvel', description='Marvel Team')
        dc = Team.objects.create(name='dc', description='DC Team')

        # Users
        users = [
            User(email='tony@stark.com', name='Tony Stark', team='marvel'),
            User(email='steve@rogers.com', name='Steve Rogers', team='marvel'),
            User(email='bruce@wayne.com', name='Bruce Wayne', team='dc'),
            User(email='clark@kent.com', name='Clark Kent', team='dc'),
        ]
        User.objects.bulk_create(users)

        # Activities
        activities = [
            Activity(user='tony@stark.com', type='run', duration=30, date=date.today()),
            Activity(user='steve@rogers.com', type='cycle', duration=45, date=date.today()),
            Activity(user='bruce@wayne.com', type='swim', duration=25, date=date.today()),
            Activity(user='clark@kent.com', type='run', duration=60, date=date.today()),
        ]
        Activity.objects.bulk_create(activities)

        # Leaderboard
        Leaderboard.objects.create(team='marvel', points=150)
        Leaderboard.objects.create(team='dc', points=120)

        # Workouts
        workouts = [
            Workout(name='Pushups', description='Do 20 pushups', difficulty='easy'),
            Workout(name='Sprints', description='Sprint 100m x 5', difficulty='medium'),
            Workout(name='Plank', description='Hold plank for 2 minutes', difficulty='hard'),
        ]
        Workout.objects.bulk_create(workouts)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
