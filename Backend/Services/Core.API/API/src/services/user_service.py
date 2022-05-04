import csv

class UserService:
    def __init__(self, path):
        self.__path = path

    def feeling_save(self, feeling, date):
        path = f'{self.__path}/feelings_csv.csv'
        rows = []

        self.verify_create_csv(path)

        rows = self.read_csv(path)

        rows.append([{'feeling': feeling, 'date': date}])

        self.write_csv(path, rows)

    def username_save(self, username, date, ip):
        path = f'{self.__path}/usernames_csv.csv'
        rows = []

        self.verify_create_csv(path)

        rows = self.read_csv(path)

        rows.append([{'username': username, 'date': date, 'ip': ip}])

        self.write_csv(path, rows)

    def verify_create_csv(self, path):
        try:
            open(f'{path}', 'r', newline='')
        except:
            file = open(f'{path}', 'w', newline='')
            writer = csv.writer(file)
            file.close()
        return

    def read_csv(self, path):
        rows = []

        with open(path, newline='') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                rows.append(row)

        return rows

    def write_csv(self, path, rows):
        with open(path, 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerows(rows)